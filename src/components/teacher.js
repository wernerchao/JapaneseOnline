import React, { Component } from 'react';
import LessonStore from '../stores/lessonStore';

class Teacher_1 extends Component {
    render() {
        // this.props.teacherId;
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
}

export default Teacher_1;