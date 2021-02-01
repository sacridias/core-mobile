import { ExpoConfig, ConfigContext } from "@expo/config";
//inport config flags.

const configure = ({ config }: ConfigContext): ExpoConfig => {

	console.log(config);
	return {
		...config,
		name: "My App",
		slug: "MySlug",
		extra: {
			flags: {

			},
		},
	};
};

export default configure;
