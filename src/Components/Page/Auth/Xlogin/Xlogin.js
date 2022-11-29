import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleIcon from '../../../../assert/google.png'
import UseToken from "../../Hook/UseToken/UseToken";
import Loading from "../../Loading/Loading";
import auth from "../../../../firebase.init";



const LoginWithOther = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const form = location.state?.from?.pathname || "/";
  let errorElement = "";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
  // token hook
  const [token] = UseToken(user || fbUser);
  // facebook login
  const fbLogIn = () => {
    signInWithFacebook()
  }
  // for google
  const loginWithGoogle = () => {
    signInWithGoogle();
  };


  useEffect(() => {
    if (user || fbUser) {
      navigate(form, { replace: true });
      Swal.fire("Login successfully", "", "success");
    }
  }, [user, fbUser, navigate, form])


  // useEffect(() => {
  //   if (token) {
  //     navigate(form, { replace: true });
  //     Swal.fire("Login successfully", "", "success");
  //   }
  // }, [token, navigate, form])


  if (loading || fbLoading) {
    return <Loading></Loading>;
  }


  if (error || fbError) {
    errorElement = <p className="text-red-600">Error:{error?.message} </p>;
  }


  return (
    <div className="">
      {errorElement}
      <div className="flex flex-col w-full border-opacity-0">
        <div className="divider">OR</div>
      </div>
      <div className="flex items-center justify-center justify-items-center gap-4">
        <div className="google hover:bg-[#0000001a] text-center hover:text-white rounded border bg-slate-300 w-full">
          <button onClick={loginWithGoogle} className='w-[100%]'>
            <span className="flex items-center pt-2 text-center justify-center">
              <img style={{ width: '40px', height: '40px' }} src={googleIcon} alt="google icon" />
              <span className="capitalize text-slate-800 font-serif font-semibold">login with google</span>
            </span>
          </button>
        </div>
        {/* <div className="google">
          <button onClick={fbLogIn}>
            <img style={{ width: '36px', height: '36px' }} src={fbIcon} alt="fb icon" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginWithOther;