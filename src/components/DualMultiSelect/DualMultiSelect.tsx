import React, { FC, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";
import ChevronDoubleRight from "mdi-react/ChevronDoubleRightIcon";
import ChevronDoubleLeft from "mdi-react/ChevronDoubleLeftIcon";

const SELECT_STYLE = {
  width: "100%",
  padding: "5px",
  minHeight: "130px",
};

interface STATE_TYPE {
  itemsToRemove: Array<any>;
  itemsToSelect: Array<any>;
  selectedItems: Array<any>;
  items: Array<any>;
}

const STATE: STATE_TYPE = {
  itemsToRemove: [],
  itemsToSelect: [],
  selectedItems: [],
  items: [],
};

interface DualMultiSelectProps {
  items: Array<any>;
  selectedItems: Array<any>;
  label: string;
  rightLabel: string;
  normalId: boolean;
}

const DualMultiSelect: FC<DualMultiSelectProps> = (props) => {
  // TODO: move inline styling from buttons to

  const { items, selectedItems, label, rightLabel, normalId = true } = props;

  const [state, setState] = useState(STATE);

  useEffect(() => {
    if (selectedItems.length > 0) {
      selectedItems.forEach((item) => {
        const idx = items.map((i) => i.id).indexOf(item.id);
        if (idx !== -1) {
          items.splice(idx, 1);
        }
      });
    }
    setState((prevState: STATE_TYPE) => ({
      ...prevState,
      selectedItems: selectedItems,
      items: items,
    }));
  }, [items, selectedItems]);

  const addElements = (elements: Array<any>) => {
    const existing = state.selectedItems;
    elements.forEach((item) => existing.push(item));

    setState((prevState) => ({
      ...prevState,
      selectedItems: existing,
    }));
  };

  const removeElements = (elements: Array<any>) => {
    const existing = state.items;
    elements.forEach((item) => existing.push(item));
    setState((prevState) => ({
      ...prevState,
      items: existing,
    }));
  };

  const handleLeftChangeMultiple = (event: any) => {
    const { options } = event.target;
    const value: Array<any> = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setState((prevState) => ({
      ...prevState,
      itemsToSelect: value,
    }));
  };

  const handleRightChangeMultiple = (event: any) => {
    const { options } = event.target;
    const value: Array<any> = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setState((prevState) => ({
      ...prevState,
      itemsToRemove: value,
    }));
  };

  const setElementsToAdd = async () => {
    const _items: Array<any> = [];
    state.itemsToSelect.forEach((el) => {
      const parsedElement = normalId ? parseInt(el) : el;
      const item = state.items.find((i) => parseInt(i.id) === parsedElement);
      _items.push(item);
    });
    return _items;
  };

  const setElementsToRemove = async () => {
    const _items: Array<any> = [];
    state.itemsToRemove.forEach((el) => {
      const parsedElement = normalId ? parseInt(el) : el;
      const item = state.selectedItems.find(
        (i) => parseInt(i.id) === parsedElement
      );
      _items.push(item);
    });
    return _items;
  };

  const addItems = async () => {
    const selectedItems = await setElementsToAdd();
    const elements: Array<any> = [];

    selectedItems.forEach((item) => {
      const idx = state.items.map((i) => i.id).indexOf(item.id);
      if (idx !== -1) {
        state.items.splice(idx, 1);
        elements.push(item);
      }
    });

    addElements(elements);
    refreshState();
  };

  const removeItems = async () => {
    const _items = await setElementsToRemove();
    const elements: Array<any> = [];

    _items.forEach((el) => {
      const idx = state.selectedItems.map((i) => i.id).indexOf(el.id);
      if (idx !== -1) {
        state.selectedItems.splice(idx, 1);
        elements.push(el);
      }
    });
    removeElements(elements);
    refreshState();
  };

  const addAll = async () => {
    const elements: Array<any> = [];
    state.items.forEach((item) => {
      elements.push(item);
    });

    addElements(elements);

    setState((prevState) => ({
      ...prevState,
      items: [],
      itemsToSelect: [],
    }));
    refreshState();
  };

  const removeAll = () => {
    const elements: Array<any> = [];
    state.selectedItems.forEach((item) => {
      elements.push(item);
    });

    removeElements(elements);

    setState((prevState) => ({
      ...prevState,
      selectedItems: [],
    }));
    refreshState();
  };

  const refreshState = () => {
    setState((prevState) => ({
      ...prevState,
      itemsToRemove: [],
      itemsToSelect: [],
    }));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <InputLabel shrink htmlFor="select-multiple-native">
            {label}
          </InputLabel>
          <Select
            variant="outlined"
            style={SELECT_STYLE}
            multiple
            native
            value={state.itemsToSelect}
            onChange={handleLeftChangeMultiple}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {state.items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </Grid>
        <Grid item xs={2} style={{ marginTop: "25px" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button
              size="small"
              variant="outlined"
              style={{
                backgroundColor:
                  state.itemsToSelect.length > 0 ? "rgb(31 162 184)" : null,
              }}
              disabled={state.itemsToSelect.length < 1}
              onClick={addItems}
              startIcon={
                <ChevronRight
                  style={{
                    fill: state.itemsToSelect.length > 0 ? "#fff" : null,
                  }}
                />
              }
            />
            <Button
              size="small"
              variant="outlined"
              style={{
                "backgroundColor":
                  state.itemsToRemove.length > 0 ? "rgb(31 162 184)" : null,
              }}
              onClick={removeItems}
              startIcon={
                <ChevronLeft
                  style={{
                    fill: state.itemsToRemove.length > 0 ? "#fff" : null,
                  }}
                />
              }
            />
            <Button
              size="small"
              color="primary"
              variant="outlined"
              style={{
                backgroundColor:
                  state.items.length > 0 ? "rgb(31 162 184)" : null,
              }}
              onClick={addAll}
              startIcon={
                <ChevronDoubleRight
                  style={{
                    fill: state.items.length > 0 ? "#fff" : null,
                  }}
                />
              }
            />
            <Button
              size="small"
              variant="outlined"
              style={{
                backgroundColor:
                  state.selectedItems.length > 0 ? "rgb(31 162 184)" : null,
              }}
              onClick={removeAll}
              startIcon={
                <ChevronDoubleLeft
                  style={{
                    fill: state.selectedItems.length > 0 ? "#fff" : null,
                  }}
                />
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <InputLabel shrink htmlFor="select-multiple-native">
            {rightLabel}
          </InputLabel>
          <Select
            multiple
            variant="outlined"
            style={SELECT_STYLE}
            native
            name="selectedItems"
            value={state.itemsToRemove}
            onChange={handleRightChangeMultiple}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {state.selectedItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
};

export default DualMultiSelect;
