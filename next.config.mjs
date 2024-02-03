/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        additionalData: `
          @import "styles/_extends.scss";
          @import "styles/_functions.scss";
          @import "styles/_mixins.scss";
        `,
    },

    // output: 'export',
};

export default nextConfig;
