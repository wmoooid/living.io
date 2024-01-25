/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        additionalData: `
          @import "styles/utils/_extends.scss";
          @import "styles/utils/_functions.scss";
          @import "styles/utils/_mixins.scss";
        `,
    },

    // output: 'export',
};

export default nextConfig;
