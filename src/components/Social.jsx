import React from "react";
import { IconButton, Flex, useToast } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilEnvelopeAdd,
  UilWhatsapp
} from "@iconscout/react-unicons";

const Social = () => {
  const notification = useToast();
  const toastId = "email-toast";
  const { t } = useTranslation();

  const notificationAndCopyToClipboard = () => {
    if (!notification.isActive(toastId)) {
      notification({
        id: toastId,
        title: t("EmailCopied.1"),
        description: t("EmailCopiedClipboard.1"),
        status: "info",
        duration: 4000,
        position: "bottom",
        isClosable: true
      });
    }
    navigator.clipboard.writeText("nahuelmarquez12@gmail.com");
  };

  return (
    <>
      <Flex as="section">
        <a
          href="https://github.com/en44no"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <IconButton mr="1" mt="-0.3" aria-label="RedirectToGitHubButton">
            <UilGithubAlt />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/nahuelmarquez/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <IconButton mr="1" mt="-0.5" aria-label="RedirectToLinkedinButton">
            <UilLinkedinAlt size="1.7rem" />
          </IconButton>
        </a>
        <IconButton
          mr="1"
          title="Gmail address"
          aria-label="GetMyEmailAddressButton"
          onClick={() => notificationAndCopyToClipboard()}
        >
          <UilEnvelopeAdd size="1.7rem" />
        </IconButton>
      </Flex>
    </>
  );
};

export default Social;
