import { useEffect } from "react";
import { createStandaloneToast } from "@chakra-ui/react";

type IStat = "info" | "warning" | "success" | "error" | "loading";

export const Toast = (desc: string, stat: IStat, dura: number) => {
  const { toast } = createStandaloneToast();

  useEffect(() => {

    if (desc && stat && dura) {
      toast({
        description: desc,
        status: stat,
        duration: dura,
        isClosable: true,
        position: "top-right",
        containerStyle: {
          minWidth: 250,
          fontSize: 12,
          textTransform: "uppercase",
        },
      });
    }

  }, [])

  return null

};
