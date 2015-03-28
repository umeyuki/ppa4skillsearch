var React = require('react/addons'),
    Select = require('react-select');
var DATA = require('./data.jsx');
var App = React.createClass({
  getInitialState: function() {
    return {
      options: [],
			members: [],
      skill: ''
    };
  },
  onChange: function (value) {
		var has_skill_members = [];
    for (var i=0; i < DATA['Members'].length; i++) {
			if (member[value]) {
				has_skill_members.push(member)
			}
    }
    this.setState({ members: has_skill_members } );
  },
  render: function() {
    var cx = React.addons.classSet;
    return <section className="pure-g">
		Hello
   	<Select options={DATA['Skills']} onChange={this.onChange} />
    <section className="pure-u-1-1">
   		  {this.state.members.map(function(member) {
   				var memberClass  = cx({
   					"member": true,
   					"pure-badge": true,
   					"male": member.type === 0 ,
   					"female": member.type === 1,
   					"girlfriend": member.type === 2,
   					"girlfriend-player": member.type === 3
   				});
   				<span className={memberClass}>{member.name}</span>
   			 }, this)}
   	</section>
    </section>
  }
});

		React.render(
			<App/>,
			document.getElementById('app')
		);
