import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';

class Calendar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedStartDate: this.props.navigation.state.params.selectedStartDate,
        selectedEndDate: this.props.navigation.state.params.selectedEndDate,
      };
      this.onDateChange = this.onDateChange.bind(this);
    }



    onDateChange(date, type) {
      if (type === 'END_DATE') {
        this.setState({
          selectedEndDate: date,
        });
      } else {
        this.setState({
          selectedStartDate: date,
          selectedEndDate: date,
        });
      }
      console.log(this.state)
    }

    _displayReturnPage= (selectedStartDate,selectedEndDate, returnPage) => {
      this.props.navigation.navigate( returnPage,{selectedStartDate :selectedStartDate, selectedEndDate: selectedEndDate})
    }

    render() {
      const returnPage =this.props.navigation.state.params.returnPage
      const selectableStartDate =this.props.navigation.state.params.selectableStartDate
      const { selectedStartDate, selectedEndDate } = this.state;
      const minDate = new Date(); // Today
      const maxDate = new Date(2050, 6, 3);

      return (
        <View style={styles.container}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={selectableStartDate}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#F9726F"
            selectedDayTextColor="#FFFFFF"
            onDateChange={this.onDateChange}
          />
          <Button
         color="#4F5866"
         title="OK"
         onPress={() =>  this._displayReturnPage(this.state.selectedStartDate,this.state.selectedEndDate, returnPage) }
         />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  });

export default Calendar
