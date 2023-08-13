import React, { useState, useEffect } from 'react';
import "../../components/style/styles.css"
import OtherHeader from '../../components/header/OtherHeader';
import manage from "../../assets/user-account-management-logo-user-icon-11562867145a56rus2zwu.png";
import monitor from "../../assets/illustrator-icon-png-computer-monitor-115631384399d5xrdpa8j.png"
import create from "../../assets/9431.png_300.png"

function Profile() {

  return (
    <div>
      <OtherHeader/>

      <section id="banner">
      </section>

      <table>
          <tbody>
            <tr>
              <td width="1500vh"><div class="main-section">
              
              <div class="dashbord">
                <div class="icon-section"> <br />
                  <img src={manage}  width="100vh" height="100vh" class="rounded-circle" />
                  <p>&nbsp;</p>
                </div>
                <div class="detail-section"> <a>Manage Account    <br/> </a> </div>
              </div>

              <div class="dashbord dashbord-green">
                <div class="icon-section"> <br />
                  <img src={monitor} width="100vh" height="100vh" class="rounded-circle" />
                  <p>&nbsp;</p>
                </div>
                <div class="detail-section"> <a>Monitor Job Progress </a> </div>
              </div>

              <div class="dashbord dashbord-blue">
                <div class="icon-section"> <br />
                  <img src={create} width="100vh" height="100vh" class="rounded-circle" />
                  <p>&nbsp;</p>
                </div>
                <div class="detail-section"> <a>Create Maintance Job</a> </div>
              </div>

              <br/>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;