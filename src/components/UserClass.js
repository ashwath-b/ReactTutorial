import React, { Component } from 'react'

export class UserClass extends Component {
  constructor(props) {
    // Called first
  }

  componentDidMount() {
    // Called after first render
    // setInterval
  }

  componentDidUpdate() {
    // Called after every render
  }

  componentWillUnmount() {
    // Called before component is unmounted
    // clear setInterval
  }

  // useEffect(() => {
  //   // setInterval
  //   return () => {
  //     // clear setinterval
  //   };
  // }, [])


  render() {
    // Called 2nd
    return (
      <div>UserClass</div>
    )
  }
}

export default UserClass;