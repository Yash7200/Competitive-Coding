// 'n'--> battery percent
// on charging  --> +2% per min
// off charging --> -3% per min

// find min time to get exactly '50%'

// 3 scenarios:
// 1. n<50
// 2. n=50
// 3. n>50

#include <stdio.h>
int main()
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        int cnt=0;

        //n is 0
        if(n==0)
        {
            printf("25\n");
        }
        
        //n==50
        else if(n==50)
        {
            printf("0\n");
        }
        
        //n is <50
        else if( (n<50)  )
        {
            while(n<50)
            {
                n=n+2;
                cnt++;
            }
            if(n>50)
            {
                n=n-3;
                cnt++;
                n=n+2;
                cnt++;
            }
            printf("%d\n",cnt);
        }
        
        //n>50
        else if( (n>50) )
        {
            while(n>50)
            {
                n=n-3;
                cnt++;
            }
            if(n==50)
            {
                printf("%d\n",cnt);
            }
            else if( (n<50) && ( (n%2)!=0 ))
            {
                while( (n%2) != 0)
                {
                    n=n-3;
                    cnt++;
                }
                if(n<50)
                {
                    while(n<50)
                    {
                        n=n+2;
                        cnt++;
                    }
                    printf("%d\n",cnt);
                }
            }
            else if( (n<50) && ( (n%2)==0 ) )
            {
                while(n<50)
                {
                    n=n+2;
                    cnt++;
                }
                printf("%d\n",cnt);
            }
        }
    }
    return 0;
}