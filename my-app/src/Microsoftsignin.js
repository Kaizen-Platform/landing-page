import { config } from "./Config";
import { PublicClientApplication } from '@azure/msal-browser';
import { Component } from "react";
import "./style.css";



class Microsoftsignin extends Component {

      constructor(props) {
          super(props);
          this.state = {
              error:null, 
              isAuthenticated: false, 
              user:{}
          }; 

          this.login =this.login.bind(this)
          this.publicClientApplication = new PublicClientApplication({
              auth:
              {
                  clientId: config.appId,
                  redirectUri: config.redirectUri
              },
            
         cache: { cacheLocation: "sessionStorage",
         storeAuthStateInCookie: true}
                }   );        }
  
        async login()
        {
            try { await this.publicClientApplication.loginPopup(
                {
                    scopes: config.scopes, prompt: "select_account"
                });
                this.setState({
                    isAuthenticated:true
                })
            }
            catch(err)
            {
                this.setState({
                    isAuthenticated: false,
                    user: {},
                    error: err});
                }
            }
            logout(){
                this.publicClientApplication.logout()

            }

              render() 
              {
                  return(
                    <div className = "Microsoftsignin"> 
                    {this.state.isAuthenticated ? <p> Susccessful Logged in </p>: 
                    <p> 
                    <button onClick ={() => this.login()} className = "M-sign"> 
                    Login with Office 365 </button> 
                    </p>}
                    </div>
                  );
              } }
  
    

               export default Microsoftsignin;

           


