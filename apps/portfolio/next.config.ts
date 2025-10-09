const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 타입스크립트 오류 무시
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint 오류 무시
  },
  webpack: (config: any) => {
    // React와 React-DOM을 alias로 설정하여 단일 인스턴스 사용
    config.resolve.alias = {
      ...config.resolve.alias,
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };
    return config;
  },
};

export default nextConfig;
