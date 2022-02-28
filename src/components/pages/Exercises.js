import React, { Component } from 'react';
import Card from '../Card'
import Welcome from '../welcome/Welcome'


class Exercises extends Component {
        render() {
            return (
                <div>
                    <Welcome username="Raul" />
                    <Card
                        title="My Title"
                        description="Learn amazing street workout and calisthenics"
                        // img={exerciseImg}
                        leftColor="#A74CF2"
                        rightColor="#617BFB"
                    />
                </div>
            );
        }
}

export default Exercises