"use client";
// ** React Imports
import { useState } from "react";
import Image from "next/image";
// ** MUI Components
import { CardContent, Typography } from "@mui/material/";
import Box from "@mui/material/Box";
import { useNotification } from "@/components/Toast/Toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EMAIL_REGEX_VALIDATION } from "@/utils/RegexFileForm";
import { CssTextFields, LinkStyled } from "@/configs/Styled/Styles";
import { sendEmailToUser } from "@/actions/emailActions";
import { useTranslations } from "next-intl";

interface IFormInput {
  email: string;
}

const initialValues = {
  email: "",
};

export default function ResetPass() {
  const [loading, setLoading] = useState(false);
  const notify = useNotification();
  const router = useRouter();
  const t = useTranslations("Forgot");
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({ defaultValues: initialValues });
  const email = watch("email", "");
  const isDisabled = !email;
  const gradientStyles = isDisabled
    ? ""
    : "bg-gradient-to-r from-[#E7B154] to-[#F99827]";
  async function onSubmit(data: any, event: any) {
    event.preventDefault();
    //console.log(data)
    try {
      setLoading(true);
      const payload = {
        email: data.email,
      };
      const response = await sendEmailToUser(payload, "resetRequestPassword");
      if (response && response.status === 200) {
        notify.showSuccessWithoutTitleNotification(`${response.message}`);
        setLoading(false);
        router.push("/");
      } else {
        notify.showErrorNotification(`${response.message}`);
        setLoading(false);
      }
      reset();
    } catch (err: any) {
      setLoading(false);
      notify.showErrorNotification(" Failed to send a reset link password!");
      console.log(" Failed to send a reset link password!", err);
    }
  }

  return (
    <>
      <div
        className={
          "max-w-[470px] md:max-w-[500px] justify-center items-center mx-auto h-screen"
        }
      >
        <Box className="content-center px-2">
          <CardContent className={""}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                className={"flex object-cover items-center w-62 justify-center"}
                width={1980}
                height={100}
                src={"/images/logos/prediLogo2.png"}
                alt={"logo"}
                priority
              />
            </Box>
            <div
              className={"flex mx-auto mr-5 items-center justify-center"}
            ></div>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {t("title")}
              </Typography>
            </Box>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <CssTextFields
                {...register("email", {
                  required: "Email is a required field",
                  min: { value: 8, message: "Minimum 8 characters" },
                  pattern: {
                    value: EMAIL_REGEX_VALIDATION,
                    message: "Email Invalid",
                  },
                })}
                className={"text-[rgb(161,155,187)] "}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <div className={"relative -mt-1 whitespace-pre "}>
                {errors.email && (
                  <p className="text-xs text-red-500 relative ml-1">
                    {errors.email.message}
                  </p>
                )}
                {!errors.email && email.length > 8 && (
                  <p className="flex text-xs items-center text-green-500 relative ml-1">
                    <svg
                      className="flex items-center text-green-500"
                      width={10}
                      height={10}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check-circle"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    <span className={"items-center ml-2"}>Valid</span>
                  </p>
                )}
              </div>
              <Box
                className={"mb-5 flex items-center flex-wrap justify-between"}
              ></Box>
              {loading ? (
                <button
                  disabled={loading}
                  data-ripple-light="true"
                  className="disabled:cursor-not-allowed disabled:bg-gray-500 w-full px-4 font-semibold py-2 text-md text-white bg-gray-500 rounded-2xl hover:bg-primary-dark"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              ) : (
                <button
                  disabled={!email.length}
                  data-ripple-light="true"
                  type={"submit"}
                  className={`transition-colors  duration-700 ease-in w-full items-center justify-center px-4 font-semibold py-2 text-md text-white rounded-2xl hover:bg-primary-dark 
             ${
               isDisabled
                 ? "bg-gray-500 hover:bg-gray-500 cursor-not-allowed"
                 : gradientStyles
             }`}
                >
                  {t("send")}
                </button>
              )}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(161,155,187)",
                    fontSize: 14,
                    fontWeight: "semibold",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  <LinkStyled
                    href="/"
                    className={
                      "text-transparent bg-clip-text bg-gradient-to-r from-[#E7B154] to-[#F99827]  items-center"
                    }
                  >
                    {t("login")}
                  </LinkStyled>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Box>
        <div className={"mt-40 flex flex-col  text-white items-center"}>
          <div className={"flex flex-col py-2 p-2  w-96"}>
            <h1 className={"text-xs"}>{t("disclaimerFooterTitle")}</h1>
            <p className={"flex py-2 text-xs italic opacity-80"}>
              {t("disclaimerFooter")}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
