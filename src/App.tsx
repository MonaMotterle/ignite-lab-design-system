import { Envelope, Lock } from 'phosphor-react';
import './styles/global.css';
import {Logo} from "./Logo";
import {Heading} from "./components/Heading/Heading";
import {Text} from "./components/Text/Text";
import { TextInput } from './components/TextInput/TextInput';
import {Checkbox} from "./components/Checkbox/Checkbox";
import {Button} from "./components/Button/Button";

function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className="flex items-center flex-col">
        <Logo />

        <Heading size="lg" className="mp-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Login and prosper!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Insert your email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text>Password</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="*******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center">
          <Checkbox id="remember" />

          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4">
           Login
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm">
          <a href="" className="text-gray-400 hover:text-gray-200 underline">Forgot your password?</a>
        </Text>
        <Text size="sm">
          <a href="" className="text-gray-400 hover:text-gray-200 underline">Not a member? Register now!</a>
        </Text>
      </footer>
    </div>
  )
}

export default App
