import React, { Component } from 'react';
import './Update.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import ProfileForm from './ProfileForm';

const containerStyle = {
    position: "relative",
    display: "inline-block",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    width: "100%",
    overflow: "auto",
    borderBottom: "1px solid #ccc"
}

const inputStyle = {
    display: "inline-block",
    color: "#000",
    fontSize: "14px",
    margin: "3px",
    border: "0"
}

class UpdateProfile extends Component  {
    state = {
        tags: [],
        invalid_input: ""
    }
    onKeyUp = (e) => {
        if (e.which === 32) {
            let input = e.target.value.trim().split(" ");
            if (input.length === 0 || input[0] === "") return;
            if (input[0].toLowerCase() !== "gym" && input[0].toLowerCase() !== "art" && input[0].toLowerCase() !== "music" && input[0].toLowerCase() !== "photography" && input[0].toLowerCase() !== "coding"){
                this.setState({
                invalid_input: "YOU ENTERED AN INVALID TAG!",
                });
                return;
            }
    
            this.setState({
                tags: [ ...this.state.tags, input ],
                invalid_input: ""
            });
            e.target.value = "";
        }
    }

    onDeleteTag = (tag) => {
        var tags = this.state.tags.filter((t) => {
          return (t !== tag);
        });
        this.setState({
          tags: tags
        });
    }

    render () {
        return (
            <div>
                <Nav/>
                <div className="update__container">
                    <div className="update__box">
                        <ProfileForm
                            invalid_input={this.state.invalid_input}
                            tags={this.state.tags}
                            containerStyle={containerStyle}
                            inputStyle={inputStyle}
                            onDeleteTag={this.onDeleteTag}
                            onKeyUp={this.onKeyUp}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default UpdateProfile;
