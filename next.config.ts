import type { NextConfig } from "next";

// GitHub Pages は https://<user>.github.io/<リポジトリ名>/ の形で公開されるため、
// basePath をリポジトリ名に合わせる必要があります。
// - ローカル開発時: 未設定 → ルート (/) で動作
// - GitHub Pages: GitHub Actions が NEXT_PUBLIC_BASE_PATH=/リポジトリ名 を渡してビルド
//   ※ <user>.github.io リポジトリ（ルート直下で公開）の場合は空文字のまま
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // 静的HTML書き出し（GitHub Pages は静的ファイルのみ配信可能）
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
