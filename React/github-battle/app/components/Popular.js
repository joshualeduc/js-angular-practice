var React = require('react');

class Popular extends React.Component {
    constructor () {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });
    }
    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <ul className='languages'>
                {languages.map(function (lang) {
                    return (
                        <li 
                          style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                          key={lang} {/* we use lang because they are all unique strings, typically we would want an id in our arrays*/}
                          onClick={this.updateLanguage.bind(null, lang)}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

module.exports = Popular;