<!-- Blockly editor for Knoxcraft.  Uses Google's Blockly code, accessible from https://developers.google.com/blockly/installation/overview -->
<!DOCTYPE html>
<html>
	<HEAD> 
		<meta charset="utf-8">
		<title>Knoxcraft Blockly Editor</title>    
		
		<!--Include Blockly files-- adjust these paths as necessary-->
		<script src="blockly_compressed.js"></script>
		<script src="blocks_compressed.js"></script>
		<script src="javascript_compressed.js"></script>
		<script src="msg/js/en.js"></script>
		<script src="blocks/turtle.js"></script>
		<script src="generators/javascript/turtle.js"></script>
		
		<style>
			html, body {
			  height: 100%;
			  margin: 0;
			}
			body {
			  background-color: #fff;
			  font-family: sans-serif;
			  overflow: hidden;
			}
			h1 {
			  font-weight: normal;
			  font-size: 140%;
			}
			table {
			  height: 100%;
			  width: 100%;
			}
			#blocklyArea {
			  height: 99%;
			  background: #fc9;
			  text-align: center;
			}
		</style>
	</HEAD>
	
	<BODY> 	
	
		<!--Page layout-->
		<table>
		<tr>
		  <td>
			<h1>Knoxcraft with Blockly!</h1>
			<p>Create your Knoxcraft Turtle scripts below.  For help and examples, see our Student Guide <a href="https://sites.google.com/a/knox.edu/knoxcraft/student-guide-blockly">here</a>.</p>
		  </td>
		</tr>
		<tr>
			<td>
			<button onclick="runCode()">View JSON for this turtle</button>  <-- This will be a submit button.
			</td>
		</tr>
		<tr>
		  <td id="blocklyArea">
			Blockly will be positioned here.
		  </td>
		</tr>
		<tr>
		  <td id="codeArea">
			<button onclick="showCode()">Show JavaScript code generated by blocks</button>  <-- This button will be removed.
		  </td>
		</tr>
	  </table>
	  
	  <div id="blocklyDiv" style="position: absolute"></div>
	  
	  <!--Define the toolbox-->
	  <xml id="toolbox" style="display: none">
		 <category name="Turtle Commands" >
			<block type="turtle_init" gap="32"></block>
			<block type="turtle_move" gap="8"></block>
			<block type="turtle_turn" gap="32"></block>
			<block type="turtle_setblockplace" gap="32"></block>
			<block type="turtle_setblocktype2" gap="8"></block>
			<block type="turtle_setblocktype" gap="32"></block>
			<block type="turtle_setpos" gap="8"></block>
			<block type="turtle_setdir"></block>
		  </category>
		  <sep></sep>
		  
		  <category name="Text">
			<block type="text"></block>
			<block type="text_print"></block>
			<block type="text_append"></block>
			<block type="text_length"></block>
			<block type="text_isEmpty"></block>
			<block type="text_indexOf"></block>
			<block type="text_charAt"></block>
			<block type="text_getSubstring"></block>
		  </category>
		  
		  <category name="Math">
			<block type="math_number"></block>
			<block type="math_arithmetic"></block>
			<block type="math_single"></block>
			<block type="math_trig"></block>
			<block type="math_constant"></block>
			<block type="math_number_property"></block>
			<block type="math_change"></block>
			<block type="math_round"></block>
			<block type="math_modulo"></block>
			<block type="math_random_int"></block>
			<block type="math_random_float"></block>
		  </category>
		  
		  <category name="Control">			
			<block type="controls_whileUntil"></block>
			<block type="controls_repeat_ext"></block>
			<block type="controls_for"></block>
			<block type="controls_flow_statements"></block>
		  </category>
		  
		  <category name="Logic">
			<block type="controls_if"></block>
			<block type="logic_compare"></block>
			<block type="logic_operation"></block>
			<block type="logic_boolean"></block>
			<block type="logic_negate"></block>
		  </category>
		  
		  <category name="Variables" custom="VARIABLE"></category>
		  <category name="Functions" custom="PROCEDURE"></category>
		</xml>
		
		<!--Blockly injection script-->
		<script>
		  var blocklyArea = document.getElementById('blocklyArea');
		  var blocklyDiv = document.getElementById('blocklyDiv');
		  var workspace = Blockly.inject(blocklyDiv,
			  {toolbox: document.getElementById('toolbox')});
		  var onresize = function(e) {
			// Compute the absolute coordinates and dimensions of blocklyArea.
			var element = blocklyArea;
			var x = 0;
			var y = 0;
			do {
			  x += element.offsetLeft;
			  y += element.offsetTop;
			  element = element.offsetParent;
			} while (element);
			// Position blocklyDiv over blocklyArea.
			blocklyDiv.style.left = x + 'px';
			blocklyDiv.style.top = y + 'px';
			blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
			blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
		  };
		  window.addEventListener('resize', onresize, false);
		  onresize();
		  		  
		  function showCode() {
			// Generate JavaScript code and display it.
			Blockly.JavaScript.INFINITE_LOOP_TRAP = null;		
			var code = Blockly.JavaScript.workspaceToCode(workspace);
			alert(code);
		  }
		  
		  function runCode() {
			  // Generate JavaScript code and run it.
			  window.LoopTrap = 10000;	//TODO:  Will this cause problems for us?  Can increase if necessary.
			  Blockly.JavaScript.INFINITE_LOOP_TRAP =
				  'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
			  Blockly.JavaScript.addReservedWords('code');
			  Blockly.JavaScript.addReservedWords('json');
			  var code = Blockly.JavaScript.workspaceToCode(workspace);
			  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
			  try {
				eval(code);
			  } catch (e) {
				alert(e);
			  }
		  }
		</script>		
	</BODY>
</html>