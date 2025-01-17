"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: '2y2hwy16', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skwe9Kowq8W3QbTIOw7nLXoIzNAja5DhjKGU3qe4Pqs8IFxxcc6Gy3gc1WeXn2qJ3wAtzud7lr1lPESHcodUUvLarwO1KujMjLoBWpb6aH2tWKl0ImeG7pcig0chtUJbFCOJVAR8ghxw3dwBkt7ti61RG4Rf4VYJB2kRA0cwNAqSvRBFIUyY"
});
