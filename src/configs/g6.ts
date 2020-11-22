export const basicConfig = {
    container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: 800, // Number，必须，图的宽度
        height: 500, // Number，必须，图的高度
        fitView: true,
        fitViewPadding: [20, 40, 50, 20],
        layout: {                // Object，可选，布局的方法及其配置项，默认为 random 布局。
          type: 'dagre',
          // type: 'demo-node',
          preventOverlap: false,
          nodeSize: 30,
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
        },
        nodeStateStyles: {
          // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
          hover: {
            fill: 'lightsteelblue',
          },
          // 鼠标点击节点，即 click 状态为 true 时的样式
          click: {
            fill: 'red',
            lineWidth: 3,
          },

          dblclick: {
            fill: 'green'
          }
        },
        defaultNode: {
          type: "rect",
          size: [120, 60],
          color: "#5B8FF9",
          style: {
            fill: "black",
            lineWidth: 3
          },
          labelCfg: {
            style: {
              fill: "#fff",
              fontSize: 20
            }
          }
        },
        defaultEdge: {
          style: {
            stroke: "black"
          }
        }
}