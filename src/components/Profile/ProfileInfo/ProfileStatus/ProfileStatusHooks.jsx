/* eslint-disable */
import React, { useEffect, useState } from 'react';

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.putStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }
  return <>
    {!editMode && <div>
      <span onDoubleClick={activateEditMode}>{props.status}</span>
    </div>
    }

    {editMode && <div>
      <input
        onChange={onStatusChange}
        autoFocus={true}
        onBlur={deactivateEditMode}
        type="text"
        value={status}
      />
    </div>
    }
  </>
}



export default ProfileStatusHooks;
