exports.pwt = {
	t: "3000",
	pid: "46",
	gcv: "11",
	pdvid: "4",
	pubid: "9999",
	dataURL: "t.test-domain.com/logger?",
	winURL: "t.test-domain.com/tracker?",
	adserver: "DFP",
	gdpr: "0",
	cmpApi: "iab",
	gdprTimeout: "10000",
	awc: "1",
	disableAjaxTimeout: true
};

exports.adapters = {
	pubmatic: {
		rev_share: "0.0",
		throttle: "100",
		publisherId: "156209",
		kgp: "_DIV_@_W_x_H_:_AUI_"
	},
	audienceNetwork: {
		rev_share: "0.0",
		throttle: "100",
		kgp: "_DIV_",
		klm: {
			"Div_1": {
				placementId: "8801674"
			},
			"Div-2": {
				placementId: "8801685"
			}
		}
	},
	sekindoUM: {
		rev_share: "0.0",
		throttle: "100",
		kgp: "_DIV_",
		klm: {
			"Div_1": {
				spaceId: 14071
			},
			"Div-2": {
				spaceId: 14071
			}
		}
	},
	appnexus: {
		rev_share: "0.0",
		throttle: "100",
		kgp: "_DIV_",
		klm: {
			"Div_1": {
				placementId: "8801674"
			},
			"Div-2": {
				placementId: "8801685"
			}
		}
	},
	pulsepoint: {
		cp: "521732",
		rev_share: "0.0",
		throttle: "100",
		kgp: "_DIV_",
		klm: {
			"Div_1": {
				ct: "76835"
			},
			"Div-2": {
				ct: "147007"
			}
		}
	}
};

exports.nativeConfig = {
	kgp:"_DIV_",
	klm:{
		"DIV1":{
			"NativeOnly": true,
			config: {
				image: {
					required: true,
					sizes: [150, 50]
				},
				title: {
					required: true,
					len: 80
				},
				sponsoredBy: {
					required: true
				},
				body: {
					required: true
				}
			}
		},
		"DIV2":{
			"NativeOnly": true,
			config: {
				image: {
					required: true,
					sizes: [150, 50]
				},
				title: {
					required: true,
					len: 80
				},
				sponsoredBy: {
					required: true
				},
				body: {
					required: true
				}
			}
		}
	}
};