function addMoreField() {
    const $contactContainername = $('#contactContainername');
    const $contactContainerNo = $('#contactContainer');
    const $contactNameinput = $contactContainername.find(".contactname");
    const $contactNoInput = $contactContainerNo.find(".contact");
  
    const $newContactNameinput = $contactNameinput.eq(0).clone(true);
    $newContactNameinput.find("[name=contactname]")
      .attr("id", `contactNameInput_${$contactNameinput.length}`)
      .val("");
    $newContactNameinput.attr("id", `contactName_${$contactNameinput.length}`);
    const removeButton = $newContactNameinput.find(".removeButton");
    removeButton.attr("onclick", `removeField(${$contactNameinput.length})`);
    removeButton.show();
  
    const $newContactNoinput = $contactNoInput.eq(0).clone(true);
    $newContactNoinput.attr("id", `contactNo_${$contactNameinput.length}`);
    $newContactNoinput.find("[name=contact]")
      .attr("id", `contactNoInput_${$contactNoInput.length}`)
      .val("");
  
  
    $contactContainername.append($newContactNameinput);
    $contactContainerNo.append($newContactNoinput);
  }
  
  function removeField(id) {
    if (id === 0) return;
    const $contactContainername = $('#contactContainername');
    const $contactContainerNo = $('#contactContainer');
  
    const $contactNameinput = $contactContainername.find(`#contactName_${id}`);
  
    const $contactNoinput = $contactContainerNo.find(`#contactNo_${id}`);
  
    $contactNameinput.remove();
    $contactNoinput.remove();
  }