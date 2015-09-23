module.exports = {
	"carousel": {
		options: {
			sizes: [
				{
					name: "-1281",
					width: 2048,
					quality: 80
				},
				{
					name: "-1280",
					width: 1280,
					quality: 80
				},
				{
					name: "-1024",
					width: 1024,
					quality: 80
				},
				{
					name: "-1024_2x",
					width: 2048,
					quality: 40
				},
				{
					name: '-768',
					width: 768,
					quality: 80
				},
				{
					name: '-768_2x',
					width: 1536,
					quality: 40
				},
				{
					name: '-667',
					width: 667,
					quality: 80
				},
				{
					name: '-667_2x',
					width: 1334,
					quality: 40
				},
				{
					name: '-480',
					width: 480,
					quality: 80
				},
				{
					name: '-480_2x',
					width: 960,
					quality: 40
				}
			]
		},
		files: [
			{
				expand: true,
				src: ['**.{jpg,gif,png}'],
				cwd: '<%= paths.src %>/assets/img/temp/base/caroussel',
				dest: '<%= paths.src %>/assets/img/temp/pictures/caroussel'
			}
		]
	}
};