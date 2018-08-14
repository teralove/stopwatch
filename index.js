const Command = require('command');
const UI = require('ui');

module.exports = function Stopwatch(dispatch) {	
    const command = Command(dispatch);
    const ui = UI(dispatch)
    ui.use(UI.static(__dirname + '/ui'))
  
	command.add('stopwatch', () => {
		ui.open()
	})   
}
