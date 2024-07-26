// for match-stick of 0 --> 6
// for match-stick of 1 --> 2
// for match-stick of 2 --> 5
// for match-stick of 3 --> 5
// for match-stick of 4 --> 4
// for match-stick of 5 --> 5
// for match-stick of 6 --> 6
// for match-stick of 7 --> 3
// for match-stick of 8 --> 7
// for match-stick of 9 --> 6

// those will be required match-sticks to create a separate digit.
// create array of digits representing required match-sticks for each digit

// in new variable store addition of 2 numbers

// with a while loop call specific position of a digit (reminder of a number) and add it to variable for sum of match-sticks.
#include <stdio.h>
int main(void)
{
	int t,ms[10]={6,2,5,5,4,5,6,3,7,6};
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a,b,cnt=0;
	    scanf("%d %d",&a,&b);
	    int sum=a+b;
	    while(sum>0)
	    {
	        cnt=cnt+ms[sum%10];
	        sum=sum/10;
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}