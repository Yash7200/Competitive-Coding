//Problem Simplification:
    //We were irresponsible for money spending.
    //To control expenses we'll eat everyday in college mess.
    //We just don't eat in mess only on Sunday.

//Logic:
    //x --> cost of eachday
    //y --> cost of sunday
    //cost of entire week is ((x*6)+y)
#include <stdio.h>
int main(void)
{
    int x,y;
    scanf("%d %d",&x,&y);
    printf("%d\n",((x*6)+y));
	return 0;
}