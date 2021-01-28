const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(
    withPWA({
        pwa: {
            dest: "public",
            register: true,
            runtimeCaching,
            disable: process.env.NODE_ENV === "development"
        }
    })
);
