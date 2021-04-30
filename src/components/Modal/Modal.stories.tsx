import React from "react";
import { Story, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    isVisible: true,
    title: "Modal Title",
  },
  parameters: {
    onClose: { actions: { argTypesRegex: "^on.*" } },
  },
} as Meta;

export const Basic: Story<ModalProps> = (args) => (
  <Modal {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas
    fermentum turpis, id molestie ipsum auctor nec. Sed dui mi, interdum in nisl
    non, sollicitudin pulvinar mi. Vestibulum pretium purus vitae pellentesque
    dignissim. Curabitur diam turpis, viverra quis mi vel, facilisis sagittis
    ante. Vivamus at rhoncus libero. Praesent aliquet mattis urna in placerat.
    Integer pellentesque odio sit amet nibh convallis, nec auctor magna sodales.
    Nulla ac neque eget magna laoreet fermentum. Cras vestibulum maximus
    sodales. Sed arcu sapien, fringilla maximus ante ac, aliquet tincidunt nunc.
    Praesent tempus quam in tellus congue, sit amet tempor enim gravida.
    Vestibulum laoreet, diam sed porta posuere, nibh sapien ultricies risus,
    vitae viverra turpis tellus sit amet eros. Integer nec urna in urna bibendum
    sagittis. Nulla euismod vestibulum dolor, in luctus quam pellentesque vel.
    Etiam non imperdiet diam. Ut eu leo laoreet, molestie nibh non, aliquet
    orci.
  </Modal>
);
