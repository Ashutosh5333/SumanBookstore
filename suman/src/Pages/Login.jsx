import React, {  useState } from "react";
import {
  Box,  Button, Card,CardBody, FormControl,
  FormLabel,FormErrorMessage, FormHelperText,  Input, Text,  VStack,  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginpost } from './../Redux/AuthReducer/Action';


const Login = () => {
  const [show, setShow] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch()


  const [post, SetPost] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    if (post.email !== ""  && post.password !== "") {
      setLoading(true)

      dispatch(Loginpost(post))
      .then((res) =>{ 
    
         if(res.type === "LOGINUSERSUCESS" ){
         if (res.payload.msg !== "login Sucessfully") {
          toast({
            position: "top",
            colorScheme: "red",
            status: "error",
            title: res.payload.msg,
          });
          setLoading(false)
        }else{
          toast({
            position: "top",
            colorScheme: "green",
            status: "success",
            title: "Logged In Sucessfully",
          })
          localStorage.setItem("usertoken",JSON.stringify(res.payload.token))
          localStorage.setItem("loggeduser", JSON.stringify(res.payload.data))
          navigate("/")
          setLoading(false)
         }
      }
      else{
        toast({
          position: "top",
          colorScheme: "red",
          status: "error",
          title: "Email id is Not registered",
        });
        setLoading(false)
      }
         
      }).catch((err) =>{
        console.log(err)
        setLoading(false)
      })
   

 } 
   if (post.email === "") {
     setisEmail(true);
   }
   if (post.password === "") {
     setisPassword(true);
   }
  
  };

  return (
    <>
     <Box  mb="10" mt="-10">
       
        <Card maxW="lg" m="auto" >
          <CardBody h="60vh" >
            <Text
              textAlign={"center"}
              fontWeight={"600"}
              mb="5"
              color="#220f7a"
              fontSize={"1.8rem"}
            >
              {" "}
              Login{" "}
            </Text>

            <VStack maxW={"2xl"} spacing={5}>
            <FormControl id="email" isInvalid={isEmail}>
              <FormLabel
                mb="10px"
                color={isEmail ? "red" : "gray"}
                fontWeight={"400"}
                letterSpacing={0.5}
                fontSize={"1.1rem"}
              >
                {" "}
                Email{" "}
              </FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                bg="#e0e0de"
                borderRadius={"20"}
                onChange={handleChange}
              />
               {!isEmail ? (
                <FormHelperText h="10px"></FormHelperText>
              ) : (
                <FormErrorMessage color="red">
                  Email is required.
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={isPassword}>
              <FormLabel
                mb="10px"
                fontWeight={"400"}
                letterSpacing={0.5}
                color={isEmail ? "red" : "gray"}
                fontSize={"1.1rem"}
              >
                {" "}
                Password{" "}
              </FormLabel>
              <Input
                name="password"
                bg="#e0e0de"
                borderRadius={"20"}
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              {!isPassword ? (
                <FormHelperText h="10px"></FormHelperText>
              ) : (
                <FormErrorMessage color="red">
                  Password is required.
                </FormErrorMessage>
              )}
            </FormControl>
              <Button
                width="100%"
                size="lg"
                onClick={handleSubmit}
                bg="#050452"
                color="#fff"
                borderRadius={"20"}
             
                isLoading={loading}
              >
                Login
              </Button>
            </VStack>

            <Text
              m="auto"
              mt="5"
              textAlign={"center"}
              style={{ fontSize: "1em", color: "blue", fontWeight: "600" }}
            >
              {" "}
              Forgot password ?{" "}
            </Text>
          
        


            <Box  w="80%" m="auto" mt="15px" >  
            <Text textAlign={"center"} fontWeight={"600"}> Don't have an account ? 

               <Link to="/sign">
            <span style={{color:"blue"}} > Signup here </span> 
               </Link>
            
             </Text>
           </Box>

          </CardBody>
        </Card>
      </Box>
    
    </>
  )
}

export default Login