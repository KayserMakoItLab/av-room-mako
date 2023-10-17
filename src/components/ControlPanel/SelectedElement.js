import { ElectronicsApplianceTVAudioVideo } from "../../../data/elements";

const SelectedElement = ({ item, element }) => {
  return (
    <>
      <div className="selected-element-title">{item.title}</div>
      {item.subTitle === "" ? (
        <div className="cp-room-options">
          <div
            className="cp-room-options-text"
            onClick={() =>
              element({
                title: item.title,
                subTitle: "TV / Video / Audio",
                status: 2,
                data: ElectronicsApplianceTVAudioVideo,
              })
            }
          >
            TV / Video / Audio
          </div>
          <div className="cp-room-options-text">Computers</div>
          <div className="cp-room-options-text">Household Appliances</div>
          <div className="cp-room-options-text">Kitchen Appliances</div>
          <div className="cp-room-options-text">Climate</div>
          <div className="cp-room-options-text">Lighting</div>
          <div className="cp-room-options-text">Sockets & Switches</div>
          <div className="cp-room-options-text">Others</div>
        </div>
      ) : (
        <div className="selected-element-icon-container">
          {item.data.map(({ id, name, image, path }) => {
            return (
              <div>
                <img src={image} width={"90rem"} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SelectedElement;