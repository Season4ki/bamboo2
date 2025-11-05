import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "bamboo1のブログ",
	subtitle: "デモサイト",
	lang: "ja", // 语言代码，例如：'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250, // 主题颜色的默认色调，范围 0-360。例如：红色: 0, 青色: 200, 青绿色: 250, 粉色: 345
		fixed: false, // 为访客隐藏主题颜色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的版权信息文本
			text: "", // 要显示的版权信息文本
			url: "", // （可选）指向原作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 在目录中显示的最大标题深度，范围 1-3
	},
	favicon: [
		// 保留此数组为空以使用默认的 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在为明暗模式设置不同 favicon 时设置
		//   sizes: '32x32',              // （可选）favicon 的尺寸，仅在有不同尺寸的 favicon 时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 内部链接不应包含基础路径，因为会自动添加
			external: true, // 显示外部链接图标并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "bamboo1",
	bio: "プログラミングとテクノロジーについ	て書いています。新しい技術を学ぶことが好きです。",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
			// 如果尚未包含相应的图标集，您需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）正在被覆盖，请参阅 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
