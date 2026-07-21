import {useForm} from "react-hook-form";
import {useAuth} from "@/context/AuthContext";
import Input from "@/components/ui/Input";import Button from "@/components/ui/Button";
export default function LoginForm(){const{register,handleSubmit}=useForm();const{login}=useAuth();return <form onSubmit={handleSubmit(login)} className="space-y-4"><Input placeholder="Email" {...register("email")}/><Input type="password" placeholder="Password" {...register("password")}/><Button className="w-full">Login</Button></form>}