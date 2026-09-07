import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (

        <>
        <div className="flex flex-col items-center justify-center">
            <nav className="flex gap-4">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/redux-counter">Redux Counter</Link>
                <Link to="/fetch-posts">Fetch Posts</Link>
                <Link to="/basic-form">Basic Form</Link>
                <Link to="/toggle-paragraph">Toggle Paragraph</Link>
                <Link to="/todo">Todo Page</Link>
                <Link to="/reset-form">Reset Form</Link>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}