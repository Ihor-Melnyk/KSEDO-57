function setProgramEducational() {
  const ProgramEducational =
    EdocsApi.getAttributeValue("ProgramEducational").value;
  if (ProgramEducational) {
    const itemId = EdocsApi.getDictionaryData(
      "Programs",
      ProgramEducational,
      []
    );
    if (itemId && itemId.length > 0) {
      const item = EdocsApi.getDictionaryItemData("Programs", itemId[0].id);
      try {
        //  EdocsApi.setAttributeValue({code: 'ProgDean', value: EdocsApi.getEmployeeDataByPersonExtID(item.attributes.find(x=>x.code == "ProgDean").value).employeeId, text: null});
        EdocsApi.setAttributeValue({
          code: "ProgChief",
          value: EdocsApi.getEmployeeDataByPersonExtID(
            item.attributes.find((x) => x.code == "ProgChief").value
          ).employeeId,
          text: null,
        });
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    // EdocsApi.setAttributeValue({code: 'ProgDean', value: null, text: null});
    EdocsApi.setAttributeValue({ code: "ProgChief", value: null, text: null });
  }
}

function setPropertyHidden(attributeName, boolValue = true) {
  //приховане
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.hidden = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyRequired(attributeName, boolValue = true) {
  //обов"язкове
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.required = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function onCardInitialize() {
  onChangeProceedings();
}
function onChangeProceedings() {
  var Proceedings = EdocsApi.getAttributeValue("Proceedings").value;
  if (Proceedings) {
    switch (Proceedings) {
      case "Студент":
        //Студент
        setPropertyHidden("Info", false);
        setPropertyHidden("STD_NAME", false);
        setPropertyHidden("STD_IDNUM", false);
        setPropertyHidden("ProgramEducational", false);
        setPropertyHidden("StdGroup", false);
        setPropertyHidden("STD_LEVEL", false);
        setPropertyHidden("StdDep", false);
        setPropertyHidden("StdEmail", false);
        setPropertyHidden("StdPhone", false);

        setPropertyRequired("STD_NAME");
        //Викладач
        setPropertyHidden("Teacher");
        setPropertyHidden("info2");
        setPropertyHidden("TeacherName");
        setPropertyHidden("TeacherPosition");
        setPropertyHidden("TeacherDep");

        setPropertyRequired("TeacherName", false);
        break;

      case "Викладач":
        //Студент
        setPropertyHidden("Info");
        setPropertyHidden("STD_NAME");
        setPropertyHidden("STD_IDNUM");
        setPropertyHidden("ProgramEducational");
        setPropertyHidden("StdGroup");
        setPropertyHidden("STD_LEVEL");
        setPropertyHidden("StdDep");
        setPropertyHidden("StdEmail");
        setPropertyHidden("StdPhone");

        setPropertyRequired("STD_NAME", false);
        //Викладач
        setPropertyHidden("Teacher", false);
        setPropertyHidden("info2", false);
        setPropertyHidden("TeacherName", false);
        setPropertyHidden("TeacherPosition", false);
        setPropertyHidden("TeacherDep", false);

        setPropertyRequired("TeacherName");
        break;

      default:
        //Студент
        setPropertyHidden("Info");
        setPropertyHidden("STD_NAME");
        setPropertyHidden("STD_IDNUM");
        setPropertyHidden("ProgramEducational");
        setPropertyHidden("StdGroup");
        setPropertyHidden("STD_LEVEL");
        setPropertyHidden("StdDep");
        setPropertyHidden("StdEmail");
        setPropertyHidden("StdPhone");

        setPropertyRequired("STD_NAME", false);
        //Викладач
        setPropertyHidden("Teacher");
        setPropertyHidden("info2");
        setPropertyHidden("TeacherName");
        setPropertyHidden("TeacherPosition");
        setPropertyHidden("TeacherDep");

        setPropertyRequired("TeacherName", false);
        break;
    }
  }
}
function onChangeStudent() {
  var Student = EdocsApi.getAttributeValue("Student").value;
  if (Student) {
    var arr = EdocsApi.getDictionaryItemData("Students", Student);
    if (arr) {
      EdocsApi.setAttributeValue({
        code: "STD_NAME",
        value: arr.attributes.find((x) => x.code == "StdName").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "STD_IDNUM",
        value: arr.attributes.find((x) => x.code == "StdIdnum").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "STD_ID",
        value: arr.attributes.find((x) => x.code == "StdId").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "STD_LEVEL",
        value: arr.attributes.find((x) => x.code == "StdLevel").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "StdPhone",
        value: arr.attributes.find((x) => x.code == "StdPhone").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "ProgramEducational",
        value: arr.attributes.find((x) => x.code == "StdProg").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "StdDep",
        value: arr.attributes.find((x) => x.code == "StdDiv").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "StdEmail",
        value: arr.attributes.find((x) => x.code == "StdEmail").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "StdGroup",
        value: arr.attributes.find((x) => x.code == "StdGroup").value,
        text: null,
      });
    }
  } else {
    EdocsApi.setAttributeValue({ code: "STD_NAME", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "STD_IDNUM", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "STD_ID", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "STD_LEVEL", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "StdPhone", value: null, text: null });
    EdocsApi.setAttributeValue({
      code: "ProgramEducational",
      value: null,
      text: null,
    });
    EdocsApi.setAttributeValue({ code: "StdDep", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "StdEmail", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "StdGroup", value: null, text: null });
  }
  setProgramEducational();
}

function onChangeTeacher() {
  var Teacher = EdocsApi.getAttributeValue("Teacher").value;
  if (Teacher) {
    var arr = EdocsApi.getDictionaryItemData("Teachers", Teacher);
    if (arr) {
      EdocsApi.setAttributeValue({
        code: "TeacherName",
        value: arr.attributes.find((x) => x.code == "TeachName").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "TeacherId",
        value: arr.attributes.find((x) => x.code == "TeachId").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "TeacherDep",
        value: arr.attributes.find((x) => x.code == "TeachDiv").value,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "TeacherPosition",
        value: arr.attributes.find((x) => x.code == "TeachStaf").value,
        text: null,
      });
    }
  } else {
    EdocsApi.setAttributeValue({
      code: "TeacherName",
      value: null,
      text: null,
    });
    EdocsApi.setAttributeValue({ code: "TeacherId", value: null, text: null });
    EdocsApi.setAttributeValue({ code: "TeacherDep", value: null, text: null });
    EdocsApi.setAttributeValue({
      code: "TeacherPosition",
      value: null,
      text: null,
    });
  }
}
