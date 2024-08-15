import React from "react";
import "./StyleContactUs.css";
import Icon from "../../assets/border_line.jpg";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import EditIcon from "@mui/icons-material/Edit";

function ContactUs() {
  return (
    <div className="form_MainContainer">
      <div className="form_SubContainer">
        <div className="form_Text_Container">
          <h3>Send Us A Message</h3>
          <p>Highly efficient range of kitchen and wardrobe accessories.</p>
          <div className="imageIcon">
            <img src={Icon} alt="border-line" />
          </div>
        </div>

        <form>
          <div className="form_FillUp_Container">
            <div className="form_FillUp_Container_Content">
              <div className="form_FillUp_Container_Content_Text Name">
                <PersonIcon />
                <span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </span>
              </div>
              <div className="form_FillUp_Container_Content_Text Contact">
                <PhoneIcon />
                <span>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required
                  />
                </span>
              </div>
              <div className="form_FillUp_Container_Content_Text Subject">
                <SaveAsIcon />
                <span>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </span>
              </div>
              <div className="form_FillUp_Container_Content_Text Comment">
                <div className="textarea">
                  <EditIcon />
                </div>
                <span>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                    rows="10"
                    cols="155"
                    required
                  ></textarea>
                </span>
              </div>
            </div>
          </div>
          <div className="form_FillUp_Container_Button">
            <button type="submit">Submit Message</button>
          </div>
        </form>


      </div>
    </div>
  );
}

export default ContactUs;
