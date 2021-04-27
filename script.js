class Nav extends React.Component{

    constructor(){
        super();
    }

    render() {
        return <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>;
    }
}

const Header = function() {
    // code

    let logoAlt = 'Company Name';

    return <header className="header">
        <div className="logo"><img src="https://via.placeholder.com/150x60" alt={logoAlt}></img></div>
        <Nav />
    </header>
};

const Main = function(props) {
    return <main className="main">{props.children}</main>
};

const Footer = function() {
    return <footer className="footer">All rights protected</footer>
};

// const Main = <main className="main">Main content</main>;

// const Footer = React.createElement('footer', {className: 'footer'}, 'All rights protected');

// ReactDOM.render(
//     <div className="article">
//         <h1>Hello world</h1>
//         <p>Some text</p>
//     </div>,
//     document.querySelector('#app')
// );

const Comment = function(props){
    const [countLike, setLike] = React.useState(0);

    const like = function(){
        let count = countLike;
        count++;
        setLike(count);
    };

    return <div className="comment">
        <p>{props.text}</p>
        <span>{props.name}</span>
        <button onClick={like}>Like {countLike}</button>
    </div>;
};

class Button1 extends React.Component {
    constructor(){
        super();

        this.state = {
            count: 0
        };

        this.click = this.click.bind(this);
    }

    click(){
        let count = this.state.count;
        count++;

        this.setState({
            count: count
        });
    }

    render(){
        return <button onClick={this.click}>Button1 {this.state.count}</button>
    }
}

ReactDOM.render(
    <div className="site">
        <Header />
        <Main >
            <h1>Main header</h1>
            <p>Main content</p>
            <Comment name="Alex" text="blablabla"/>
            <Comment name="Bob" text="Some text"/>
            <Comment name="Mike" text="Lorem ipsum"/>
            <Button1 />    
        </Main>
        <Footer />
    </div>,
    document.querySelector('#app')
);