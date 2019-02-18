import Link from 'next/link';
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
)

export default Header