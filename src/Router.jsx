import React from 'react'

function Router(props) {
    // console.log("this is the props", props);

    const { children } = props

    console.log("this is the childrem", children);

    //the below code will show the full url
    // console.log(window.location.href);
    const obj = window.location.href
    const url = new URL(obj)
    // console.log(url);
    const path = url.pathname.substring(1)

    console.log("this is pathname",path);

    // console.log("this is the pathname", pathname);



    return (
        <div>
{/* //React.children.toArray  is method provided by rect itl self for conveerting it into children into array*/}
            {React.Children.toArray(children).find((child)=>
                child.props.path === path
            )}

        </div>
    )
}

export default Router
