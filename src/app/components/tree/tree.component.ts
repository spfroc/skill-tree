import { Component, OnInit } from '@angular/core';
import G6 from '@antv/g6';
import { Observable, from, interval, fromEvent, of, pipe } from 'rxjs';
import { filter, map, scan } from 'rxjs/operators';
import { TreeService } from 'src/app/services/tree.service';
import { basicConfig } from '../../../configs/g6';
import { Tree } from '../../interfaces/tree';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NodeService } from 'src/app/services/node.service';
import { EdgeService } from 'src/app/services/edge.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  private graph;
  private tree: Tree;
  constructor(
    private treeService: TreeService,
    private nodeService: NodeService,
    private edgeService: EdgeService,
  ) { 
    
  }

  ngOnInit(): void {

    this.test();

  }

  /**------------------------------------------------- */
  

  /**------------------------------------------------- */

  private getTree() {
    // let tree = this.http.get('http://localhost:8000/api/tree');
    // tree.subscribe(res => {
    //   console.log(res);
    // })

    // tree.subscribe(res => {
    //   console.log(res);
    // }); 
    return this.treeService.getTree()
  }

  private getNodes() {
    return this.nodeService.getNodes();
  }

  private getEdges() {
    return this.edgeService.getEdges();
  }


  private addEdge(source, target, graph) {
    // console.log(graph.getItem(source));
    let sourceNode = graph.findById(source);
    let targetNode = graph.findById(target);
    // console.log('sourceNode: ', sourceNode, 'targetNode: ', targetNode);
    graph.addItem('edge', {
      type: 'polyline',
      source: source,
      startPoint: {x: 100, y: 100},
      target: target,
      style: {
        stroke: 'green',
        lineWidth: 10,
      },
    });
  }

  private test() {
    const width = window.innerWidth - 512;
    const height = window.innerHeight || 500;

    G6.registerNode('diamond', {
      draw(cfg, group) {
        // console.log('cfg: ', cfg);
        const keyShape = group.addShape('rect', {
          attrs: {
            x: 0, // 必须配置
            y: 0, // 必须配置
            fill: 'red',
            width: 70,
            height: 90,
            stroke: 'red',
            radius: [5,5,5,5],
            shadowOffsetX: 2,
            shadowOffsetY: 2,
            shadowColor: 'gray',
            shadowBlur: 10,
            opacity: 0.8,
          },
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: 'rect-shape',
          zIndex: 1,
          draggable: true,
        });
        group.addShape('rect', {
          attrs: {
            x: 15, // 必须配置
            y: 20, // 必须配置
            fill: 'green',
            width: 40,
            radius: [3,3,3,3],
            height: 40,
            stroke: 'green',
            opacity: 0.8,
          },
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: 'rect-shape',
          zIndex: 1,
          draggable: true,
        });
        group.addShape('text', {
          attrs: {
            text: cfg.label,
            x: 15,
            y: 40,
            fontSize: 14,
            textAlign: 'center',
            textBaseline: 'middle',
            fill: '#0000D9',
          },
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: 'text-shape',
          
        });
        return keyShape;
      },
      
    });
    // this.graph = new G6.Graph({
    this.graph = new G6.Graph({
      container: 'container',
      width,
      height,
      fitView: true,
      // translate the graph to align the canvas's center, support by v3.5.1
      fitCenter: true,
      defaultNode: {
        fill: '#333',
        type: 'rect'
      },
      defaultEdge: {
        // type: 'cubic',
        type: 'polyline',
        // startPoint: {x: 100, y: 0},
        // endPoint: {x: 0, y: 110},
        // ... 其他属性
        style: {
          stroke: 'red',
          strokeOpacity: 0.5,
          lineWidth: 2,
        },
      },
      modes: {
        // 支持的 behavior
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
        edit: ['click-select'],
      },

      layout: {
        type: 'dagre', // 布局类型
        // collapsed: true,
        rankdir: 'TB',
        nodeSep: 50, // 节点之间间距
        rankSep: 100, // 每个层级之间的间距
      },
    });

    this.getTree().subscribe(res => {
      this.graph.data(res);
      this.graph.render();
    });
  }
}
