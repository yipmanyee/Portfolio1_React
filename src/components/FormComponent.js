import React from 'react';

function Form(props){
    return(
            <form>
            <div class="form-group row">
                <label for="Name" class="col-md-2 col-form-label">Name</label>
                <div class="col-md-10">
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" />
                </div>
            </div>
            <div class="form-group row">
                <label for="areaCode" class="col-md-2 col-form-label">Phone</label>
                <div class="col-md-10">
                    <input type="tel" class="form-control" name="telNum" placeholder="Tel. number" />
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">Email</label>
                <div class="col-md-10">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                </div>
            </div>
            <div class="form-group row">
                <label for="feedback" class="col-md-2 col-form-label">Comment</label>
                <div class="col-md-10">
                    <textarea class="form-control" id="message" name="message" rows="8" placeholder="Message"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-md-2 col-md-10">
                    <button type="submit" class="btn btn-success">Send</button>
                </div>
            </div>
            </form> 
    );
}

export default Form;