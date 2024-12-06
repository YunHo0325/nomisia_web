import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/nomisia-0.1.0-setup.exe',
        destination: 'https://s3.us-west-1.wasabisys.com/nomisia.storage/nomisia-0.1.0-setup.exe',
        permanent: true,
      },
      {
        source: '/install_mac.sh',
        destination: 'https://s3.us-west-1.wasabisys.com/nomisia.storage/install_mac.sh',
        permanent: true,
      },
      {
        source: '/install_linux.sh',
        destination: 'https://s3.us-west-1.wasabisys.com/nomisia.storage/install.sh',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
