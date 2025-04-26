import 'dotenv/config';

export default {
  expo: {
    name: "cryptoIndecatorPro",
    slug: "cryptoIndecatorPro",
    version: "1.0.0",
    android: {
      package: "com.anonymous.cryptoIndecatorPro",
    },
    ios: {
      bundleIdentifier: "com.anonymous.cryptoIndecatorPro",
    },
    plugins: ["expo-font"],
    extra: {
      CRYPTOPANIC_API_KEY: process.env.CRYPTOPANIC_API_KEY,
    },
  },
};
