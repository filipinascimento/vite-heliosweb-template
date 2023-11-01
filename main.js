import {Helios,xnet} from "helios-web";

// Zachary Karate Club Network
let nodes = {
  '0': { faction: 1},
  '1': { faction: 1},
  '2': { faction: 1},
  '3': { faction: 1},
  '4': { faction: 1},
  '5': { faction: 1},
  '6': { faction: 1},
  '7': { faction: 1},
  '8': { faction: 2},
  '9': { faction: 2},
  '10': { faction: 1},
  '11': { faction: 1},
  '12': { faction: 1},
  '13': { faction: 1},
  '14': { faction: 2},
  '15': { faction: 2},
  '16': { faction: 1},
  '17': { faction: 1},
  '18': { faction: 2},
  '19': { faction: 1},
  '20': { faction: 2},
  '21': { faction: 1},
  '22': { faction: 2},
  '23': { faction: 2},
  '24': { faction: 2},
  '25': { faction: 2},
  '26': { faction: 2},
  '27': { faction: 2},
  '28': { faction: 2},
  '29': { faction: 2},
  '30': { faction: 2},
  '31': { faction: 2},
  '32': { faction: 2},
  '33': { faction: 2}
};

// Edges are arrays of node ids
let edges = [
  { source: '0', target: '1' },
  { source: '0', target: '2' },
  { source: '0', target: '3' },
  { source: '0', target: '4' },
  { source: '0', target: '5' },
  { source: '0', target: '6' },
  { source: '0', target: '7' },
  { source: '0', target: '8' },
  { source: '0', target: '10' },
  { source: '0', target: '11' },
  { source: '0', target: '12' },
  { source: '0', target: '13' },
  { source: '0', target: '17' },
  { source: '0', target: '19' },
  { source: '0', target: '21' },
  { source: '0', target: '31' },
  { source: '1', target: '2' },
  { source: '1', target: '3' },
  { source: '1', target: '7' },
  { source: '1', target: '13' },
  { source: '1', target: '17' },
  { source: '1', target: '19' },
  { source: '1', target: '21' },
  { source: '1', target: '30' },
  { source: '2', target: '3' },
  { source: '2', target: '7' },
  { source: '2', target: '8' },
  { source: '2', target: '9' },
  { source: '2', target: '13' },
  { source: '2', target: '27' },
  { source: '2', target: '28' },
  { source: '2', target: '32' },
  { source: '3', target: '7' },
  { source: '3', target: '12' },
  { source: '3', target: '13' },
  { source: '4', target: '6' },
  { source: '4', target: '10' },
  { source: '5', target: '6' },
  { source: '5', target: '10' },
  { source: '5', target: '16' },
  { source: '6', target: '16' },
  { source: '8', target: '30' },
  { source: '8', target: '32' },
  { source: '8', target: '33' },
  { source: '9', target: '33' },
  { source: '13', target: '33' },
  { source: '14', target: '32' },
  { source: '14', target: '33' },
  { source: '15', target: '32' },
  { source: '15', target: '33' },
  { source: '18', target: '32' },
  { source: '18', target: '33' },
  { source: '19', target: '33' },
  { source: '20', target: '32' },
  { source: '20', target: '33' },
  { source: '22', target: '32' },
  { source: '22', target: '33' },
  { source: '23', target: '25' },
  { source: '23', target: '27' },
  { source: '23', target: '29' },
  { source: '23', target: '32' },
  { source: '23', target: '33' },
  { source: '24', target: '25' },
  { source: '24', target: '27' },
  { source: '24', target: '31' },
  { source: '25', target: '31' },
  { source: '26', target: '29' },
  { source: '26', target: '33' },
  { source: '27', target: '33' },
  { source: '28', target: '31' },
  { source: '28', target: '33' },
  { source: '29', target: '32' },
  { source: '29', target: '33' },
  { source: '30', target: '32' },
  { source: '30', target: '33' },
  { source: '31', target: '32' },
  { source: '31', target: '33' },
  { source: '32', target: '33' }
];



let color1 = [0.23,0.45,0.68];
let color2 = [0.70,0.78,0.90];

Object.values(nodes).forEach(node=>{
  node.color = (node.faction==1)?color1:color2;
}) 


let helios = new Helios({
		elementID: "netviz", // ID of the element to render the network in
		nodes: nodes, // Dictionary of nodes 
		edges: edges, // Array of edges
		use2D: false, // Choose between 2D or 3D layouts
	});
  

// Sets the background to black
helios.backgroundColor([0.0,0.0,0.0,1.0]);
// Sets global scale for the size of nodes
helios.nodesGlobalSizeScale(0.5);
// Sets edge global opacity
helios.edgesGlobalOpacityScale(0.75);
// Sets edge global width scale
helios.edgesGlobalWidthScale(0.1);
// Set the zoom factor to 20 so the generated network will be close enough
helios.zoomFactor(20); 


