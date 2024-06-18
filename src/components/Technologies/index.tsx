import { useAtomValue } from "jotai";
import { FunctionComponent } from "preact";
import { themeAtom } from "../../store/store";

const Technologies: FunctionComponent = () => {
  const themeValue = useAtomValue(themeAtom);
  return (
    <div
      id="languages"
      class={`lg:py-12 md:py-9 select-none ${themeValue == "light" ? "bg-slate-200" : "bg-[#252736]"}`}
    >
      <div class="container relative mx-auto md:h-16 lg:h-20 overflow-x-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)20%,rgba(0,0,0,1)80%,rgba(0,0,0,0))]">
        <img
          src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
          alt="Kubernetes"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-1)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
          alt="docker"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-2)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg"
          alt="ansible"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-3)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
          alt="bash"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-4)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"
          alt="terraform"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-5)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
          alt="aws"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-6)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/golang/golang-icon.svg"
          alt="golang"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-7)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg"
          alt="archlinux"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-8)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
          alt="typescript"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*(10-9)*-1)]"
        />
        <img
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          alt="nodejs"
          class="absolute left-full top-0 md:w-16 lg:w-20 animate-scrollLeft [animation-delay:calc(30s/10*10*-1)]"
        />
      </div>
    </div>
  );
};

export { Technologies };
