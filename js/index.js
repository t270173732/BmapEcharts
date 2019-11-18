var myChart = echarts.init(document.getElementById('container'));
var url = 'http://api.map.baidu.com/directionlite/v1/driving?origin=29.701451,106.712851&destination=29.281919,106.719423&ak=VpAUGk39mzRjnz68OSY8wFBu4KC1IRxG'
var url1 = 'http://api.map.baidu.com/directionlite/v1/driving?origin=29.701451,106.712851&destination=29.493581,106.201126&ak=VpAUGk39mzRjnz68OSY8wFBu4KC1IRxG'

var startPoint = {
    x: 106.54288,
    y: 29.526742
};
// 地图自定义样式
var bmap = {
    center: [startPoint.x, startPoint.y],
    zoom: 11,
    roam: true,
    // mapStyle: {
    //     styleJson: [{
    //         "featureType": "water",
    //         "elementType": "all",
    //         "stylers": {
    //             "color": "#044161"
    //         }
    //     }, {
    //         "featureType": "land",
    //         "elementType": "all",
    //         "stylers": {
    //             "color": "#004981"
    //         }
    //     }, {
    //         "featureType": "boundary",
    //         "elementType": "geometry",
    //         "stylers": {
    //             "color": "#064f85"
    //         }
    //     }, {
    //         "featureType": "railway",
    //         "elementType": "all",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "highway",
    //         "elementType": "geometry",
    //         "stylers": {
    //             "color": "#004981"
    //         }
    //     }, {
    //         "featureType": "highway",
    //         "elementType": "geometry.fill",
    //         "stylers": {
    //             "color": "#005b96",
    //             "lightness": 1
    //         }
    //     }, {
    //         "featureType": "highway",
    //         "elementType": "labels",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "arterial",
    //         "elementType": "geometry",
    //         "stylers": {
    //             "color": "#004981"
    //         }
    //     }, {
    //         "featureType": "arterial",
    //         "elementType": "geometry.fill",
    //         "stylers": {
    //             "color": "#00508b"
    //         }
    //     }, {
    //         "featureType": "poi",
    //         "elementType": "all",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "green",
    //         "elementType": "all",
    //         "stylers": {
    //             "color": "#056197",
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "subway",
    //         "elementType": "all",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "manmade",
    //         "elementType": "all",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "local",
    //         "elementType": "all",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "arterial",
    //         "elementType": "labels",
    //         "stylers": {
    //             "visibility": "off"
    //         }
    //     }, {
    //         "featureType": "boundary",
    //         "elementType": "geometry.fill",
    //         "stylers": {
    //             "color": "#029fd4"
    //         }
    //     }, {
    //         "featureType": "building",
    //         "elementType": "all",
    //         "stylers": {
    //             "color": "#1a5787"
    //         }
    //     }, {
    //         "featureType": "label",
    //         "elementType": "all",
    //         "stylers": {
    //             // "visibility": "off"
    //         }
    //     }]
    // }
}
// $.ajax({
//     url: url,
//     type: 'GET',
//     dataType: 'jsonp',
//     jsonp: "callback",
//     jsonpCallback: "success_jsonpCallback",
//     success: function (res) {
//         console.log(res)
//         var lines = [];
//         res.result.routes[0].steps.forEach(function (item, index) {
//             var path = item.path.split(';'), cross = [];
//             path.forEach((i) => {
//                 var arr = i.split(',')
//                 cross.push([Number(arr[0]), Number(arr[1])])
//             });
//             cross.forEach((seg, idx) => {
//                 if (idx != cross.length - 1) {
//                     lines.push([
//                         {coord: [seg[0], seg[1]]},
//                         {coord: [cross[idx + 1][0], cross[idx + 1][1]]}
//                     ])
//                 }
//             })
//             // lines.push([
//             //     {coord:[item.start_location.lng,item.start_location.lat]},
//             //     {coord:[item.end_location.lng,item.end_location.lat]}
//             // ])
//
//         })
//         var head = [
//             {coord: [106.712851, 29.701451]},
//             {coord: lines[0][0].coord}
//         ];
//         var foot = [
//             {coord: lines[lines.length - 1][1].coord},
//             {coord: [106.719423, 29.281919]}
//         ]
//         lines.unshift(head);
//         lines.push(foot)
//         myChart.setOption({
//             animation: false,
//             bmap: {
//                 center: [106.54288, 29.526742],
//                 zoom: 11,
//                 roam: true,
//             },
//             series: [
//                 {
//                     type: 'lines',
//                     coordinateSystem: 'bmap',
//                     data: lines,
//                     tooltip: {
//                         show: false
//                     },
//                     lineStyle: {
//                         normal: {
//                             width: 6,
//                             opacity: 1,
//                             shadowColor: 'red',
//                             shadowBlur: 3
//                         },
//                         emphasis: {
//                             color: 'red'
//                         }
//                     },
//                     animationDelay: function (idx) {
//                         return idx * 20;
//                     }
//                 },
//                 {
//                     type: 'scatter',
//                     coordinateSystem: 'bmap',
//                     symbol: 'path://M54.227,12.611c-0.338-0.336-0.736-0.505-1.196-0.505c-0.229,0-0.712,0.188-1.446,0.559  c-0.735,0.372-1.515,0.786-2.336,1.248c-0.823,0.459-1.797,0.875-2.921,1.247c-1.123,0.371-2.163,0.559-3.12,0.559  c-0.884,0-1.664-0.168-2.336-0.505c-2.229-1.044-4.168-1.823-5.814-2.337c-1.646-0.513-3.416-0.771-5.311-0.771  c-3.272,0-6.999,1.064-11.177,3.188c-0.862,0.43-1.48,0.763-1.88,1.007l-0.397-2.911c0.897-0.779,1.476-1.914,1.476-3.195  c0-2.347-1.902-4.249-4.249-4.249c-2.347,0-4.249,1.902-4.249,4.249c0,1.531,0.818,2.862,2.032,3.61l5.74,42.09  c0.171,1.253,1.243,2.162,2.474,2.162c0.112,0,0.226-0.007,0.341-0.022c1.368-0.188,2.326-1.447,2.139-2.815L19.69,38.303  c4.186-2.077,7.807-3.124,10.853-3.124c1.293,0,2.554,0.193,3.783,0.583c1.23,0.391,2.253,0.815,3.067,1.274  c0.814,0.46,1.775,0.886,2.88,1.274c1.107,0.39,2.2,0.585,3.279,0.585c2.726,0,5.991-1.027,9.796-3.08  c0.478-0.248,0.828-0.492,1.049-0.731c0.221-0.239,0.332-0.579,0.332-1.021V13.806C54.729,13.347,54.562,12.948,54.227,12.611z',
//                     symbolSize: 20,
//                     symbolOffset: [10, -10],
//                     tooltip: {
//                         show: false
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: 'red',
//                             borderWidth: 1,
//                             borderColor: '#fff'
//                         }
//                     },
//                     label: {
//                         normal: {
//                             textStyle: {
//                                 fontWeight: 'bold',
//                                 color: '#333'
//                             },
//                             show: true,
//                             position: 'right',
//                             formatter: '{b}'
//                         }
//                     },
//                     data: [
//                         {name: '起点', value: [106.712851, 29.701451]},
//                         {name: '终点', value: [106.719423, 29.281919]},
//                     ]
//                 },
//             ]
//         })
//
//
//     }
// })

var j1 = $.ajax({
    url: url,
    type: 'GET',
    dataType: 'jsonp',
})
var j2 = $.ajax({
    url: url1,
    type: 'GET',
    dataType: 'jsonp',
})
$.when(j1, j2).then(function (a1, a2) {
    console.log(a1, a2)
    var lines = [], lines1 = [];
    if (a1[0].status == 0) {
        lines = pathFormat(a1[0],[106.712851, 29.701451],[106.719423, 29.281919])
    }
    if (a2[0].status == 0) {
        lines1 = pathFormat(a2[0],[106.712851, 29.701451],[106.201126, 29.493581])
    }
    myChart.setOption({
        animation: false,
        bmap: {
            center: [106.54288, 29.526742],
            zoom: 11,
            roam: true,
        },
        series: [
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                data: lines,
                tooltip: {
                    show: false
                },
                lineStyle: {
                    normal: {
                        width: 6,
                        opacity: 1,
                        shadowColor: 'red',
                        shadowBlur: 3
                    },
                    emphasis: {
                        color: 'red'
                    }
                },
                animationDelay: function (idx) {
                    return idx * 20;
                }
            },
            {
                type: 'scatter',
                coordinateSystem: 'bmap',
                symbol: 'path://M54.227,12.611c-0.338-0.336-0.736-0.505-1.196-0.505c-0.229,0-0.712,0.188-1.446,0.559  c-0.735,0.372-1.515,0.786-2.336,1.248c-0.823,0.459-1.797,0.875-2.921,1.247c-1.123,0.371-2.163,0.559-3.12,0.559  c-0.884,0-1.664-0.168-2.336-0.505c-2.229-1.044-4.168-1.823-5.814-2.337c-1.646-0.513-3.416-0.771-5.311-0.771  c-3.272,0-6.999,1.064-11.177,3.188c-0.862,0.43-1.48,0.763-1.88,1.007l-0.397-2.911c0.897-0.779,1.476-1.914,1.476-3.195  c0-2.347-1.902-4.249-4.249-4.249c-2.347,0-4.249,1.902-4.249,4.249c0,1.531,0.818,2.862,2.032,3.61l5.74,42.09  c0.171,1.253,1.243,2.162,2.474,2.162c0.112,0,0.226-0.007,0.341-0.022c1.368-0.188,2.326-1.447,2.139-2.815L19.69,38.303  c4.186-2.077,7.807-3.124,10.853-3.124c1.293,0,2.554,0.193,3.783,0.583c1.23,0.391,2.253,0.815,3.067,1.274  c0.814,0.46,1.775,0.886,2.88,1.274c1.107,0.39,2.2,0.585,3.279,0.585c2.726,0,5.991-1.027,9.796-3.08  c0.478-0.248,0.828-0.492,1.049-0.731c0.221-0.239,0.332-0.579,0.332-1.021V13.806C54.729,13.347,54.562,12.948,54.227,12.611z',
                symbolSize: 20,
                symbolOffset: [0, -10],
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: 'red',
                        borderWidth: 1,
                        borderColor: '#fff'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            fontWeight: 'bold',
                            color: '#333'
                        },
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                data: [
                    {name: '终点', value: [106.201126, 29.493581]},
                ]
            },
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                data: lines1,
                tooltip: {
                    show: false
                },
                lineStyle: {
                    normal: {
                        width: 6,
                        opacity: 1,
                        shadowColor: 'red',
                        shadowBlur: 3
                    },
                    emphasis: {
                        color: 'red'
                    }
                },
                animationDelay: function (idx) {
                    return idx * 20;
                }
            },
            {
                type: 'scatter',
                coordinateSystem: 'bmap',
                symbol: 'path://M54.227,12.611c-0.338-0.336-0.736-0.505-1.196-0.505c-0.229,0-0.712,0.188-1.446,0.559  c-0.735,0.372-1.515,0.786-2.336,1.248c-0.823,0.459-1.797,0.875-2.921,1.247c-1.123,0.371-2.163,0.559-3.12,0.559  c-0.884,0-1.664-0.168-2.336-0.505c-2.229-1.044-4.168-1.823-5.814-2.337c-1.646-0.513-3.416-0.771-5.311-0.771  c-3.272,0-6.999,1.064-11.177,3.188c-0.862,0.43-1.48,0.763-1.88,1.007l-0.397-2.911c0.897-0.779,1.476-1.914,1.476-3.195  c0-2.347-1.902-4.249-4.249-4.249c-2.347,0-4.249,1.902-4.249,4.249c0,1.531,0.818,2.862,2.032,3.61l5.74,42.09  c0.171,1.253,1.243,2.162,2.474,2.162c0.112,0,0.226-0.007,0.341-0.022c1.368-0.188,2.326-1.447,2.139-2.815L19.69,38.303  c4.186-2.077,7.807-3.124,10.853-3.124c1.293,0,2.554,0.193,3.783,0.583c1.23,0.391,2.253,0.815,3.067,1.274  c0.814,0.46,1.775,0.886,2.88,1.274c1.107,0.39,2.2,0.585,3.279,0.585c2.726,0,5.991-1.027,9.796-3.08  c0.478-0.248,0.828-0.492,1.049-0.731c0.221-0.239,0.332-0.579,0.332-1.021V13.806C54.729,13.347,54.562,12.948,54.227,12.611z',
                symbolSize: 20,
                symbolOffset: [10, -10],
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: 'red',
                        borderWidth: 1,
                        borderColor: '#fff'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            fontWeight: 'bold',
                            color: '#333'
                        },
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                data: [
                    {name: '起点', value: [106.712851, 29.701451]},
                    {name: '终点', value: [106.719423, 29.281919]},
                ]
            },
        ]
    })
})

function pathFormat(data,start = [],end = []) {
    var lines = [];
    data.result.routes[0].steps.forEach(function (item, index) {
        var path = item.path.split(';'), cross = [];
        path.forEach((i) => {
            var arr = i.split(',')
            cross.push([Number(arr[0]), Number(arr[1])])
        });
        cross.forEach((seg, idx) => {
            if (idx != cross.length - 1) {
                lines.push([
                    {coord: [seg[0], seg[1]]},
                    {coord: [cross[idx + 1][0], cross[idx + 1][1]]}
                ])
            }
        })

    })
    var head = [
        {coord: start},
        {coord: lines[0][0].coord}
    ];
    var foot = [
        {coord: lines[lines.length - 1][1].coord},
        {coord: end}
    ]
    lines.unshift(head);
    lines.push(foot);
    return lines;
}


