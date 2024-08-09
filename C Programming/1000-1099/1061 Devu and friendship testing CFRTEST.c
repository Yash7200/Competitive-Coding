//Problem Simplification:
    //n --> no. of friends/size of array
    //friend breaks friendship if Devu fails to give party on given day
    //Devu gives only 1 party on specific day (mistake in comments)
    //if more than 1 party on specific day then Devu breaks friendship

//Logic:
    //take input of array size
    //create array variable to store days of party
    //create 'cnt' variable to count no. of repeating days
    //create array of days with 100 elements representing no. of parties on specific day & initialize all elements with 0
    //in for loop:
        //scan day of party (take input)
        //increment no. of parties on specific day by 1
        //(Note: we've created days array according party on day between 1 to 100 so we need to [pass day no. - 1] as index of days array)
        //if there is more than 1 parties on specific days then increment 'cnt' variable
    //Our ans will be 'total friends' - 'repeating parties'

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    int a[n],cnt=0;
	    int days[100]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        days[(a[j]-1)]++;
	        if(days[(a[j]-1)]>1)
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",n-cnt);
	}
	return 0;
}