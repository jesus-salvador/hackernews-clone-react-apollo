import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Feed: {
            fields: {
                links: {
                    merge(existing = [], incoming, {variables}) {
                        const merged = existing.slice(0);
                        // Insert the incoming elements in the right places, according to variables.
                        const end = variables.skip + Math.min(variables.take, incoming.length);
                        for (let i = variables.skip; i < end; ++i) {
                            merged[i] = incoming[i - variables.skip];
                        }

                        return merged;
                    },

                    read(existing, { variables }) {
                        // If we read the field before any data has been written to the
                        // cache, this function will return undefined, which correctly
                        // indicates that the field is missing.
                        const page = existing && existing.slice(
                          variables.offset,
                          variables.offset + variables.limit,
                        );
                        // If we ask for a page outside the bounds of the existing array,
                        // page.length will be 0, and we should return undefined instead of
                        // the empty array.
                        if (page && page.length > 0) {
                          return page;
                        }
                    },
                },
            },
        },
        Link: {
            merge: true,
        }
    },
});
