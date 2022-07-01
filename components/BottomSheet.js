import RBSheet from "react-native-raw-bottom-sheet";
import { useEffect, useRef } from "react";

export default function BottomSheet({ open, children, onClose, height, closeRequested }) {
    const refRBSheet = useRef();

    useEffect(() => {
        if (closeRequested) {
            refRBSheet.current.close();
        }
    }, [closeRequested]);

    useEffect(() => {
        if (open) {
            refRBSheet.current.open();
        } else {
            refRBSheet.current.close();
        }
    }, [open]);

    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={height + 25}
            onClose={() => onClose()}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.3)",
                },
                draggableIcon: {
                    backgroundColor: "#ccc",
                },
            }}
        >
            {children}
        </RBSheet>
    );
}
